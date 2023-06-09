import { SvgXml } from 'react-native-svg';

interface HomeIconProps {
  color?: string;
}

export function HomeIcon({ color }: HomeIconProps) {
  const markup = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
  <path stroke="${color || '#fff'}" fill-rule="evenodd" clip-rule="evenodd" d="M20.0284 7.98621L14.2684 3.50589C13.2287 2.69661 11.7724 2.69661 10.7318 3.50589L4.97179 7.98621C4.27003 8.53245 3.86011 9.37149 3.86011 10.2595V17.2992C3.86011 18.8899 5.14939 20.1792 6.74011 20.1792H18.2601C19.8508 20.1792 21.1401 18.8899 21.1401 17.2992V10.2595C21.1401 9.37149 20.7302 8.53245 20.0284 7.98621Z" stroke-width="1.5"/>
  </svg>`;

  return <SvgXml xml={markup} />;
}
