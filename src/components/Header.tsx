import "./css.css"

const Header = () => {
    return (
        <div className="container">
            
            <div className="flex">
                <div>
                    <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.FuCU5yLTGDi9mIhXhyBSQAHaEK&pid=Api&P=0&h=180" alt="" />
                </div>
                <div>  <nav>
                    <ul className="ul">
                        <li><a href="">Trang chủ </a></li>
                        <li><a href="">Sản phẩm</a></li>
                        <li><a href="">Liên hệ </a></li>
                        {/* <li><a href="">Contact</a></li> */}
                    </ul>
                </nav></div>
                <div style={{ textAlign: 'right' }} className="mt-3">
                <a className="btn btn-warning" href="/login">Đăng Nhập </a>
                <a className="btn btn-primary mx-3" href="/signup">Đăng ký</a>
            </div>
                

            </div>

            <div className="banner"><img style={{ width: "100%", height: "400px", marginTop: '50px' }} src="https://tse4.mm.bing.net/th?id=OIP.LsegFIrPXrgzeS_mKSXHLgHaE5&pid=Api&P=0&h=180" alt="" /></div>
        </div >
    )
}

export default Header;