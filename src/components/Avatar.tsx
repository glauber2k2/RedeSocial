import { ImgHTMLAttributes } from 'react';
import styles from "./Avatar.module.css"
 
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {//ja importa os tipos padrões de um elemento html, como src, alt, e etc...
  hasBorder?: boolean; //pois não é um elemento padrão.
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) { /*aplicando direto valor na desestruturação*/

  /*const hasBorder = props.hasBorder !== false;*/
  
  return (
    <img 
    className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    {...props}
    />
  )
}