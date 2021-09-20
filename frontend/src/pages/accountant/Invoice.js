import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";
import CustomerService from '../../services/CustomerService';
import InvoicePopup from './InvoicePopup';

export class Invoice extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_file1:'',
            data:[],
            message:'',
            items:[],
            showPopUp: false,
            orderId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const { id } =this.props.match.params;
        this.setState({orderId: id})
        console.log(id);
        CustomerService.getInvoiceDetails(parseInt(id)).then((res) => {
            console.log("data");
            console.log(res.data.data);
            this.setState({data: res.data.data});
            this.setState({items: res.data.data.orderResponses})
        })
    }

    handleSubmit = (event) =>{
        console.log("got the file");
    }
    generate = () => {
       htmlToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95, backgroundColor: "white" })
       .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            //link.href = dataUrl;
            //link.click();
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(dataUrl);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(dataUrl, 'JPEG', 0,0 , pdfWidth, pdfHeight);
            pdf.save("down.pdf");

        });  
    };

    cancelPupUp = () => {
        this.setState({showPopUp: false});
    };

    openPupUp = () => {
       this.setState({showPopUp: true});
    }

    calculation = (res) => {
        let total = 0;
        this.state.items.map((x) => {
            total= total+ (x.quantity * x.price);
            })
        return total;
    }

    render() {
        var newDate= this.state.data.date;
        var total = this.calculation(this.state.data) + 200;
        var newId = this.state.orderId;
        return (
            <>
            <div className="h-auto w-full flex justify-center items-center" id="my-node"> 
            { this.state.showPopUp ? (
                <InvoicePopup canclePopup={this.cancelPupUp} id={parseInt(newId)}/>
            ) : null}
                <div className="flex w-8/12 justify-start flex-col mt-20" id="content">
                    <div className="w-full h-auto pt-2 pb-2 text-maingreen font-bold text-30 inline-flex justify-center item-center border-b-2">Green Nest</div>
                    {/* <div className="mt-4 ml-9 text-xl text-secondarygreen font-semibold bottom-1">Thank you for your order</div> */}
                    {/* <div className="mt-3 ml-9">Hi Hiruni, </div>
                    <div className="mt-3 ml-9">Thanks for your order. Its on build untill we confirm that payment has been received.</div> */}
                    <div className="text-secondarygreen font-bold text-xl mt-3 ml-9">Order Details</div>
                    <div className="mt-3 text-base text-maingreen ml-9">Date: { newDate ? newDate.substring(0,10) : null}</div>
                    <table className="border-collapse w-10/12 border mt-3 ml-9">
                        <tr>
                            <th className="w-5/12 p-3 bg-gray-400 text-base">Product</th>
                            <th className="w-4/12 p-3 bg-gray-400 text-base">Quatity</th>
                            <th className="w-3/12 p-3 text-base bg-gray-400">Price</th>
                        </tr>
                        {this.state.items.length != 0 ? this.state.items.map((value, key) => (
                            <tr key={key}>
                            <td className="p-2 text-sm text-center">{value.name}</td>
                            <td className="p-2 text-sm text-center">{value.quantity}</td>
                            <td className="p-2 text-sm text-center">{value.price} LKR</td>
                        </tr>
                        )) : null}
                        
                    </table>
                    <div className="w-10/12 mt-2 grid justify-start items-center grid-cols-invoice ml-9">
                        <div className="text-base">Subtotal</div>
                        <div className="flex justify-center items-center text-base">{this.calculation(this.state.data)} LKR</div>
                    </div>
                    <div className="w-10/12 grid justify-start items-center grid-cols-invoice ml-9">
                        <div className="text-base">Delivery charge</div>
                        <div className="flex justify-center items-center text-base">200 LKR</div>
                    </div>
                    <div className="w-10/12 grid justify-start items-center grid-cols-invoice ml-9">
                        <div className="text-base">Total</div>
                        <div className="flex justify-center items-center text-base">{total} LKR</div>
                    </div>

                    <div className="mt-3 ml-9 text-secondarygreen">Address</div>
                    <div className="mt-1 ml-9 text-sm">{this.state.data.address1}, {this.state.data.address2}.</div>
                    <div className="mt-1 ml-9 text-sm mb-9">{this.state.data.town}.</div>

                </div> 
            </div>
            <div className="inline-flex justify-center items-center w-full">
                  <button onClick={this.generate} type="primary" className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded mr-4">Generate Invoice</button>
                  <button onClick={this.openPupUp} type="primary" className="bg-maingreen hover:bg-hovergreen text-white flex font-bold py-2 px-4 rounded mr-4">Send Invoice</button>
            </div>
            
            
            </>
        )
    }
}

export default Invoice
