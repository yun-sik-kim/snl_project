import Link from 'next/link';

export default function TopNav() {

    return(
        <nav className="fixed w-full h-12 justify-between items-center bg-BRAND_COLOR2 right-0 left-0 text-white flex p-4 z-50">
                {/* Top Navi Logo */}
                <Link href="/" className="text-xl font-bold">Home</Link>

                {/* Top Navi Links */}
                <div className="space-x-4">
                    <Link href="/" className="hover:underline hover:text-BRAND_COLOR1 transition-colors">Home</Link>
                    <Link href="/about" className="hover:underline hover:text-BRAND_COLOR1 transition-colors">About</Link>
                    <Link href="/contact" className="hover:underline hover:text-BRAND_COLOR1 transition-colors">Contact</Link>
                </div>
       </nav>
    );
}
