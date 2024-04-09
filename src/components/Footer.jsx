const Footer = (() => {
    return (
        <footer className="bg-snow-white p-8 text-center border border-b-2 mt-24 border-black ">
            <div className="container mx-auto">
                <div className="flex flex-col gap-5 sm:flex-row justify-around container mx-auto">
                    <div>
                        <h4 className="font-bold text-md">You can also find us here!</h4>
                        <hr className="mb-3" />
                        <a href="#"><p>Facebook</p></a>
                        <a href="#"><p>Instagram</p></a>
                        <a href="#"><p>Twitter</p></a>
                    </div>
                    <div>
                        <h4 className="font-bold text-md">Our partners! </h4>
                        <hr className="mb-3" />
                        <p>Partner 1</p>
                        <p>Partner 2</p>
                        <p>Partner 3</p>

                    </div>
                    <div>
                        <h4 className="font-bold text-md" >Contact us</h4>
                        <hr className="mb-3" />
                        <p>Email - test@email.com</p>
                        <p>Phone - +370006444</p>
                        <p>Address - Universiteto g 10.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
})

export default Footer