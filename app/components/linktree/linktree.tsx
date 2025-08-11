import Link from 'next/link';

const links = [
    { href: 'https://instagram.com/', label: 'Instagram' },
    { href: 'https://facebook.com/', label: 'Facebook' },
    { href: 'https://twitter.com/', label: 'Twitter' },
    // Add more links as needed
];

export default function Linktree() {
    return (
        <div className="flex flex-col items-center space-y-4">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}