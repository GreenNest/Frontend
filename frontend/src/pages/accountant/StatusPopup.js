const StatusPopup =(props) => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-1/3 max-w-3xl mx-auto my-6">
            {/*content*/}
            <div className="relative flex flex-col w-full px-5 bg-gray-200 border-0 rounded-lg shadow-inner outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-center p-5 border-b border-gray-400 border-solid rounded-t">
                <h3 className="text-2xl font-bold text-maingreen">Edit Order Status  </h3>
              </div>
    
              {/*body*/}
              <div className="relative flex-auto p-6">
              <label class="inline-flex items-center justify-center mt-3">
                <input type="checkbox" class="form-checkbox h-8 w-8 text-green-600"  /><span class="ml-6 text-gray-700 text-xl" >Paid</span>
            </label>

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
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      );

}

export default StatusPopup;