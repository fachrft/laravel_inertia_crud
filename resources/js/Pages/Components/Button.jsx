import { Link } from "@inertiajs/react";

const Button = ({ text, bgColor, to, onClick }) => {
    return (
        <Link href={to} onClick={onClick}>
            <button className={`${bgColor} text-white py-2 px-8 rounded-lg`}>
                {text}
            </button>
        </Link>
    );
};

export default Button;
