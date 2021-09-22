import React, { Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import * as htmlToImage from 'html-to-image';
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
    
    // var history = useHistory();

    componentDidMount(){
        // checkValidate();
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

    // checkValidate = async() => {
    //     const y = JSON.parse(localStorage.getItem('authorization')); 
    //     if(!y){
    //         <Redirect to='/login' />
    //     }else{
    //         if(y.roles[0] == "moderator" || y.roles[0] == "customer" || y.roles[0] == "admin"){
    //             history.push("/error");
    //         }
    //     }
    // }

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
            <div className="flex items-center justify-center w-full h-auto" id="my-node"> 
            { this.state.showPopUp ? (
                <InvoicePopup canclePopup={this.cancelPupUp} id={parseInt(newId)}/>
            ) : null}
                <div className="flex flex-col justify-start w-8/12 mt-20" id="content">
                    <div className="inline-flex justify-center w-full h-auto pt-2 pb-2 font-bold border-b-2 text-maingreen text-30 item-center">Green Nest</div>
                    {/* <div className="mt-4 text-xl font-semibold ml-9 text-secondarygreen bottom-1">Thank you for your order</div> */}
                    {/* <div className="mt-3 ml-9">Hi Hiruni, </div>
                    <div className="mt-3 ml-9">Thanks for your order. Its on build untill we confirm that payment has been received.</div> */}
                    <div className="mt-3 text-xl font-bold text-secondarygreen ml-9">Order Details</div>
                    <div className="mt-3 text-base text-maingreen ml-9">Date: { newDate ? newDate.substring(0,10) : null}</div>
                    <table className="w-10/12 mt-3 border border-collapse ml-9">
                        <tr>
                            <th className="w-5/12 p-3 text-base bg-gray-400">Product</th>
                            <th className="w-4/12 p-3 text-base bg-gray-400">Quatity</th>
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
                    <div className="grid items-center justify-start w-10/12 mt-2 grid-cols-invoice ml-9">
                        <div className="text-base">Subtotal</div>
                        <div className="flex items-center justify-center text-base">{this.calculation(this.state.data)} LKR</div>
                    </div>
                    <div className="grid items-center justify-start w-10/12 grid-cols-invoice ml-9">
                        <div className="text-base">Delivery charge</div>
                        <div className="flex items-center justify-center text-base">200 LKR</div>
                    </div>
                    <div className="grid items-center justify-start w-10/12 grid-cols-invoice ml-9">
                        <div className="text-base">Total</div>
                        <div className="flex items-center justify-center text-base">{total} LKR</div>
                    </div>

                    <div className="mt-3 ml-9 text-secondarygreen">Address</div>

                    <div className="mt-1 ml-9 text-sm">{this.state.data.address1}</div>
                    <div className="mt-1 ml-9 text-sm mb-9">{this.state.data.town}.</div>

                </div> 
            </div>
            <div className="inline-flex items-center justify-center w-full">
                  <button onClick={this.generate} type="primary" className="flex px-4 py-2 mr-4 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Generate Invoice</button>
                  <button onClick={this.openPupUp} type="primary" className="flex px-4 py-2 mr-4 font-bold text-white rounded bg-maingreen hover:bg-hovergreen">Send Invoice</button>
            </div>
            
            
            </>
        )
    }
}

export default Invoice
