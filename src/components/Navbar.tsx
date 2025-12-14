import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Wine } from 'lucide-react';
import logoFr from '../assets/icons/logoFR.svg'

export const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/productos', label: 'Productos' },
    { path: '/combos', label: 'Combos' },
    // { path: '/puntos', label: 'Puntos' },
    { path: '/recetario', label: 'Recetario' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <img src={logoFr} alt="Logo Francachela"  className="  h-20 py-2 px-4 rounded-lg bg-primary/5
    transition-all duration-700 ease-in-out
    hover:scale-105 hover:shadow-[0_0_12px_rgba(147,51,234,0.4)]"/>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Button
                key={link.path}
                asChild
                variant={location.pathname === link.path ? 'default' : 'ghost'}
              >
                <Link to={link.path}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
