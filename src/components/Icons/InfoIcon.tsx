import { SvgXml } from 'react-native-svg';

interface InfoIconProps {
  color?: string;
}

export function InfoIcon({ color }: InfoIconProps) {
  const markup = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99913 7.16669C9.88413 7.16669 9.7908 7.26002 9.79163 7.37502C9.79163 7.49002 9.88496 7.58335 9.99996 7.58335C10.115 7.58335 10.2083 7.49002 10.2083 7.37502C10.2083 7.26002 10.115 7.16669 9.99913 7.16669Z" fill=${color || '#666'}/>
  <path d="M9.99913 7.16669C9.88413 7.16669 9.7908 7.26002 9.79163 7.37502C9.79163 7.49002 9.88496 7.58335 9.99996 7.58335C10.115 7.58335 10.2083 7.49002 10.2083 7.37502C10.2083 7.26002 10.115 7.16669 9.99913 7.16669" stroke=${color || '#666'} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 10.5V14.6667M10 18V18C5.8575 18 2.5 14.6425 2.5 10.5V10.5C2.5 6.3575 5.8575 3 10 3V3C14.1425 3 17.5 6.3575 17.5 10.5V10.5C17.5 14.6425 14.1425 18 10 18Z" stroke="#D73035" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}
