import Link from 'next/link';
import Image from 'next/image';

export default function TopNav() {
    return (
        <nav className="fixed w-full h-16 flex justify-between items-center bg-transparent text-black px-6 py-2 z-50">
            
            {/* Logo on the left */}
            <Link href="/" className="flex items-center ml-2">
                <Image 
                    src="/logo.svg" 
                    alt="Logo" 
                    width={64} 
                    height={64} 
                    className="p-1"
                />
            </Link>

            {/* Log In Button Styled Like the Image */}
            <Link 
                href="/login" 
                className="px-4 py-2 bg-black text-white rounded-lg font-semibold hover:opacity-80 transition-opacity"
            >
                Log In
            </Link>
        </nav>
    );
}
