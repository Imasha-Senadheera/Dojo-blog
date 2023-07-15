const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#0492c2',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;