import React, { FC } from 'react'
import { Image, Typography } from "antd";
interface PropsType {
  id: string | number
  size: "large" | "small"
  imageSrc: string
  price: number | string
  title: string

}
export const ProductImage: FC<PropsType> = (props) => {
  const { id, size, imageSrc, price, title } = props;

  return (
    <>
      {
        size == 'large' ?
          <Image src={imageSrc} height={285} width={490}></Image> :
          <Image src={imageSrc} height={120} width={240}></Image>
      }
      <div>
        <Typography.Text type='secondary'>{title.slice(0,25)}</Typography.Text>
        <Typography.Text type='danger' strong>人民币 {price} 起</Typography.Text>
      </div>
    </>
  )
}
