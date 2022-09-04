import Image from "next/image";
import Link from "next/link";

interface Props {
  width?: 162;
  height?: 50;
  ImageUrl: any;
  alt?: string;
  link: "/";
}

const Button = ({ width, height, ImageUrl, alt, link }: Props) => {
  return (
    <Link href={link}>
      <a>
        <Image src={ImageUrl} width={width} height={height} alt={alt} />
      </a>
    </Link>
  );
};

export default Button;
