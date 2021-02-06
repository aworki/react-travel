

## antd安装

` yarn add antd @antd-design/icons`

有两个，icon库里有各种icon图标



## jSX.Element是jsx代码的标注



## 一个组件传入的props要进行类型标记，把interface标记写在FC后面

``` typescript
interface Iproduct {
  title: JSX.Element;
  sideImage: string
  products: any[]
}
const ProductCollection: FC<Iproduct> = (props) => {
  const { title, sideImage, products } = props;
  return ()
}
```



## router

react-router-dom本来是不支持typescript的，需要下载类型支持，@type/react-router-dom，并且是最好是 --save-dev，打包时不占空间



### exact关键词

是指当前route只有路径名全匹配时才会渲染，通常用于主页的渲染



###  swtich和exact的区别

swtic只会渲染其中的一个路径，并且是优先度最高的一条路径

``` react
<Switch>
        <Route path="/" component={HomePage}></Route>
        <Route path="/signIn" render={()=><h1>登陆页面</h1>}></Route>
</Switch>
```

对于这段代码，当在地址栏输入localhost：3000/signIn时，相当于是2个都匹配的，但是只渲染一个，并且是优先级最高的一个，所以选择了第一个

所以应该swtich和exact都要用

``` react
<Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signIn" render={()=><h1>登陆页面</h1>}></Route>
        <Route render={()=><h1>404 NOT FOUND</h1>}></Route>
      </Switch>
</Router>
```



### 完善的路由架构搭建

``` react
//app.tsx
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/signIn" render={()=><h1>登陆页面</h1>}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        //这里是带参数的路由，冒号来提示参数，参数保存在match的param里
        <Route path="/detail/:touristRouteId" component={DetailPage}></Route>
        <Route render={()=><h1>404 NOT FOUND</h1>}></Route>
      </Switch>
    </Router>
  );
}
```



### route组件在渲染时，会自动添加props参数

有3个props数据

![image-20210203174434950](C:\Users\dc\AppData\Roaming\Typora\typora-user-images\image-20210203174434950.png)



**match**：当前url和路径匹配是否一致

![image-20210203174956162](C:\Users\dc\AppData\Roaming\Typora\typora-user-images\image-20210203174956162.png)



match里有个**param**字段 ，是路由参数



### 路由参数传递 

1、使用？的格式，？后跟参数

` http://www.baidu.com?q="sss"`

2、使用/的形式

`http://www.baidu.com/sss`

### 如何使用路由跳转？

1、使用history对象的push方法可以进行跳转

``` react
//不带参数的
<Button onClick={()=>history.push('/register')}>注册</Button>
<Button onClick={()=>history.push('/signIn')}>登陆</Button>
//带参数的
<div onClick={()=>history.push(`/detail/${id}`)}></div>

```

2、使用超链接<link>组件

``` react
    <Link to={`detail/${id}`}>
      {
        size == 'large' ?
          <Image src={imageSrc} height={285} width={490}></Image> :
          <Image src={imageSrc} height={120} width={240}></Image>
      }
      <div>
        <Typography.Text type='secondary'>{title.slice(0,25)}</Typography.Text>
        <Typography.Text type='danger' strong>人民币 {price} 起</Typography.Text>
      </div>
    </Link>
```



### 获取当前路由参数

1、采用原生方法

``` react
interface MatchParams{
  touristRouteId:string,

}

export const DetailPage:FC<RouteComponentProps<MatchParams>> = (props)=> {
  const {history,match,location} = props;
  // const parssam = useParams();
  console.log(history);
  console.log(match.params);
  console.log(location);
  // console.log(parssam);
  return (
    <div>
      <h1>这里是，{match.params.touristRouteId}</h1>
    </div>
  )
}

```



2、用useParam钩子

``` react
//这种方法可以获取参数，这个参数是一个对象，所以，可以在内部确定数据类型，进行参数的调用
export const DetailPage = ()=> {
  const parssam: MatchParams = useParams();
  console.log(parssam);
  return (
    <div>
      <h1>这里是，{parssam.touristRouteId}</h1>
    </div>
  )
}
```

### react-router-dom中的变量

1、RouteComponentProps和WithRouter

``` react
//在类组件中使用router
class HeaderComponent extends React.Component<RouteComponentProps> {
  //这里就可以调用props里面的history了
  render(){
      console.log(props);
      return (
      
      )
  }
}

export const Header = withRouter(HeaderComponent) ;

```

* 高阶组件中的`withRouter`, 作用是将一个组件包裹进`Route`里面, 然后`react-router`的三个对象`history, location, match`就会被放进这个组件的`props`属性中.

* RouteComponentProps是泛型

## 泛型叠加

``` react
export const DetailPage:FC<RouteComponentProps<MatchParams>> = (props)=> {
  const {history,match,location} = props;
  console.log(history);
  console.log(match);
  console.log(location);
  return (
    <div>
      <h1>详情 {props.match.params}</h1>
    </div>
  )
}
```



## redux使用

### 创建的store的方法

![image-20210204151855211](C:\Users\dc\AppData\Roaming\Typora\typora-user-images\image-20210204151855211.png)

### 点击事件触发redux数据改变

``` react
const action = {
        type:"add_language",
        payload:{
          code:"new_lang",
          name:"新语言"
        }
      }
store.dispatch(action);
```



### 绑定事件监听来实时更新

``` react
constructor(props: RouteComponentProps<{}, StaticContext, unknown> | Readonly<RouteComponentProps<{}, StaticContext, unknown>>){
    super(props);
    const storeState = store.getState();
    //设置state
    this.state = {
      language: storeState.language,
      languageList: storeState.languageList,
    };
    store.subscribe(()=>{
      //这里是取到当前的最新值
      const storeState = store.getState();
      //设置state
      this.setState({
        language:storeState.language
      })
    });
  }
```

主要使用store.getState()和store.subscribe()

### redux项目级架构

为了方便观看和调试，所以引入redux的架构

1、每个模块拥有一个文件夹

![image-20210206104104152](C:\Users\dc\AppData\Roaming\Typora\typora-user-images\image-20210206104104152.png)

2、在language文件夹中创建languageActions.ts

``` react
//创建action变量，并export出去，用来统一化action，防止打错这种低级错误
export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";
```

``` typescript
//创建action工厂函数，用来创建action，return一个action
//防止创建action的时候创建错误
export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};
export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
```

``` typescript
//通过定义actionCreator的返回值的接口，防止我们工厂函数编写错误
//还可以编写一个联合类型作为reducer的action注释
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;

```

```  typescript
//这个是reduer函数，action的注释之前一直赋成any，这里可以赋成上面创建的联合类型LanguageActionTypes
export default (state = defaultState, action:LanguageActionTypes) => {
  console.log(state, action)
  switch(action.type){
    case CHANGE_LANGUAGE:
      i18next.changeLanguage(action.payload);
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state, 
        languageList:[...state.languageList,action.payload]
      }
    default:
      return state
  }
  
};
```





### react-redux给redux的语法糖

类组件

1、提供数据

``` react
import {Provider} from 'react-redux'
import store from './redux/store'
//Provider和store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
,
  document.getElementById('root')
);
```



2、订阅 connect函数

编写两个props（特别麻烦）



函数式组件



