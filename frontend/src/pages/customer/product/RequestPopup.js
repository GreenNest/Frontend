
const RequestPopup = (props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/*content*/}
        <div className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
            <h3 className="text-2xl font-bold text-maingreen">ADD ORDER REQUEST</h3>
          </div>

          {/*body*/}
          <div className="relative flex-auto p-6">
            <div>
              <label className="font-medium">Product Category</label>
              <input
                type='text'
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='productCategory'
                value="Fruit Plant"
              />
            </div>
            <div>
              <label className="font-medium">Product</label>
              <input
                type='text'
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='product'
                value="Mango Plant"
              />
            </div>
            <div>
              <label className="font-medium">Quentity</label>
              <input
                type='text'
                className="w-full p-2 mb-4 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='quentity'
              />
            </div>
            <div>
              <label className="font-medium">Description</label>
              <textarea
                className="w-full p-2 mb-2 text-sm transition duration-150 ease-in-out border rounded-md outline-none text-primary"
                id='description'
              />
            </div>
          </div>

          {/*footer*/}
          <div className="flex items-center justify-end p-4 border-t border-gray-400 border-solid rounded-b">
            <button 
              className="px-6 py-2 mb-1 mr-2 text-base font-bold text-red-600 uppercase transition-all duration-150 ease-linear bg-gray-400 rounded shadow outline-none background-transparent hover:bg-gray-500 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={props.canclePopup}
            >
              Cancel
            </button>
            <button 
              className="px-6 py-2 mb-1 mr-1 text-base font-bold text-blue-900 uppercase transition-all duration-150 ease-linear bg-gray-400 rounded shadow outline-none hover:shadow-lg focus:outline-none hover:bg-gray-500"
              type="button"
              // onClick={() => setShowModal(false)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestPopup;