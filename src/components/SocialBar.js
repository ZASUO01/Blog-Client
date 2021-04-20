import {FaLinkedin, FaInstagram, FaGithub, FaFacebook} from 'react-icons/fa'

const SocialBar = () => {
    return(
        <div className="w-full p-10 flex flex-col items-center justify-center">
            <h1 className="text-gray-600 text-xl md:text-3xl">Redes Sociais</h1>
            <div className="w-full flex flex-col items-center justify-center mt-6 md:flex-row"> 
                <a href="https://br.linkedin.com/" target="_blank" rel="noreferrer">
                    <FaLinkedin  className="text-7xl mb-10 md:mb-0 md:mr-10 text-blue-400"/>
                </a>
                <a href="https://github.com/ZASUO01" target="_blank" rel="noreferrer">
                    <FaGithub className="text-7xl mb-10 md:mb-0 md:mr-10"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FaInstagram className="text-7xl mb-10 md:mb-0 md:mr-10 text-pink-400"/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FaFacebook className="text-7xl text-blue-700"/>
                </a>
            </div>
        </div>
    )
}

export default SocialBar;