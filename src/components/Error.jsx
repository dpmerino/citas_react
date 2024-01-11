const Error = ({children}) => {
    return (
        <div>
            <div className='bg-red-800 text-white text-center font-bold uppercase
          p-3 mb-3 rounded-md'>
                {children}
            </div>
        </div>
    )
}

export default Error