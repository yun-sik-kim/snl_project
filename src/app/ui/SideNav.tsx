import Link from 'next/link';
import Image from 'next/image';

export default function SideNav() {

    return(
          <aside className="z-40 fixed w-32 bg-BRAND_COLOR1 text-BRAND_COLOR2 flex flex-col justify-between p-2 h-full">
            {/* Side Navi Links */}
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="block px-3 py-2 hover:bg-white rounded">Home</Link>
              <Link href="/about" className="block px-3 py-2 hover:bg-white rounded">
                <Image src="/chess_pawn.svg" width={24} height={24} alt="Logo" className="inline w-6 h-6" /> About
              </Link>
              <Link href="/contact" className="block px-3 py-2 hover:bg-white rounded">Contact</Link>
              <Link href="/setting" className="block px-3 py-2 hover:bg-white rounded">Settings</Link>
            </nav>

            {/* Footer */}
            <div className="text-sm text-gray-300 mt-6">
              © {new Date().getFullYear()} My App
            </div>
          </aside>
    );
}
