import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    
<footer className="bg-gray-700 dark:bg-gray-900 m-6 mr-0 ml-0 mb-0  mt-auto pb-0 bottom-0 left-0 right-0">
    <div className="w-full container mx-auto p-4 md:px-230 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src="https://png.pngtree.com/png-clipart/20221022/original/pngtree-chef-cat-vector-logo-mascot-png-image_8712395.png"  alt="Logo" className="w-10 h-10 mr-2"/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">YummyHub</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                <a href="https://www.instagram.com/renedev02/" className="mr-4 hover:underline md:mr-6">
                    <FaInstagram className="inline-block w-6 h-6 mr-1" />
                    Instagram
                </a>
                </li>
                <li>
                <a href="https://github.com/ReneKubax/Next-JS-Menus" className="hover:underline">
                    <FaGithub className="inline-block w-6 h-6 mr-1" />
                    GitHub Code
                </a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a href="https://flowbite.com/" className="hover:underline">Developed by Rene Fuentes</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}
