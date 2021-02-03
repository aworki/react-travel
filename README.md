## antd安装

` yarn add antd @antd-design/icons`

icon库里有各种icon图标



## jSX.Element是jsx代码的标注

## 一个组件传入的props要进行类型标记，把interface标记写在FC后面
                                  看这里⬇
> export const ProductCollection:FC<Iproduct> =  (props) => {
  const {title,sideImage,products} = props;

  return (
    <div>
      
    </div>
  )
}


