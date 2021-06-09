# React

### 响应式设计思想

### 事件绑定

### immutable 概念

state不允许我们做任何改变
解决方案： 将数组进项拷贝，然后修改副本

### 声明式开发

它对应的是 **命令式开发** 
#### 命令式开发：
直接操作DOM(例如：JQuery):创建一个页面，需要一点点的告诉每个dom需要怎样去挂载，要渲染什么。
#### 声明式开发：
例如：React
场景：盖楼：把楼理解为一个网页，
JQuery开发的话，需要告诉工人这栋楼需要一步一步怎么做，先盖什么后盖什么，每一步都需要关心
React开发的话，面向数据来编程的，先把数据构建好，然后它会自动的根据数据来构建网页，把数据理解为图纸，把图纸做好了后，React会根据图纸来自动的构建整个页面
声明式开发会帮助我们节约大量操作dom的代码

### 可以与其他框架并存

React仅仅是挂载了一个dom，页面上要是想使用其他框架的话，可以操作其他dom，只要不使用两个框架的代码操作同一个dom就是没问题的

### 组件化

继承React.Component来定义一个组件
区分：dom元素以小写开头，React组件以大写开头
组件间传值：父组件向子组件传递属性或方法，子组件通过props调用

### 单项数据流

单项数据流的概念：
思考一个问题：如果父组件向多个子组件传递父组件中state，而某一个子组改变了state，要是引起了错误，排查起来会非常麻烦，需要将每个使用了state的组件都排查一遍，在真实项目中会拆分出很多组件，从而带来的影响是很大的
只能在父组件中修改父组件的state或者父组件向子组件传递数据，可以通过将修改的逻辑包装在一个函数中，向子组件传递这个函数

### 视图层框架

为什么React只给自己定义为是一个 视图层框架 而不是将自己定义为一个大型的框架？
假设一个项目非常复杂，非常多的组件，要是子组件想向另一个父组件下面的子组件进行通信，这样的话该子组件上面的所有组件都需要参与到传值的过程中来，  在做大型的项目时，React是不能解决复杂的传值问题，所以React把自己定义为一个视图层框架(只解决数据与页面渲染的问题)

可以使用：Redux,flux 来解决复杂传值

### 函数式编程

React函数式编程带来了几个好处：
1.维护起来比较容易，每个函数各司其职
2.给自动化测试带来了便捷

### PropTypes&DefaultProps

#### PropTypes:

限制父组件向子组件传值的类型

#### DefaultProps:

父组件没有向子组件传递值时使用默认值，传递则会覆盖该值

https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html

### 数据驱动

当数据发生变化时，页面也会变化
当组件的state或者props发生改变的时候，render函数就会重新执行，同理，当父组件的render函数每次被运行时，它会带着它的子组件一起运行

### 虚拟DOM

数据+模板 先形成JSX模板 --> 再变成JS对象(虚拟DOM)-->最后再变成真实DOM
底层使用React.createElement("标签",{标签属性},"innerHTML值")接口做成真实DOM

#### 优点：
1.性能提升

2.使得跨端应用得以实现。例如使用React Native开发原生应用

#### 虚拟DOM中的Diff算法

diff算法(虚拟dom与真实dom进行比对)：

1.数据发生变化(修改state)时才会进行dom比对

2.它是进行**同层比对**：从最顶层往下逐层比对，无论到哪一层比对出dom有差异就不会再往下进行比对了

2.1：优点：算法简单，比对速度变快   减少了虚拟dom与真实dom比对上的开销
		缺点：如果只是当前层不一样，而下一层又是一样的话 就会造成渲染性能上的浪费

2.2：key值使用类似于数据库id那种不会根据数据删除后导致其他数据key值变动的数据

3.setState()函数 比对的优化： 假如同时三次修改数据，React会整合三次修改最后统一更新，减少了数据更新次数

### Ref

在react中获取dom元素时使用(react不推荐直接操作dom，它推崇数据驱动)
ref与setState一起使用时，把ref绑定的dom更新逻辑写在setState的第二个参数(回调函数)中

### 生命周期函数

生命周期函数 指在某一时刻 组件会自动执行调用(例如：render())的函数
以JSX为例：

#### **Initialization**(初始化)：

设置props和state

#### **Mounting**(挂载)：

会经历三个阶段

##### 1.ComponentWillMount():

在组件即将被挂载到页面时(还没挂载到)会自动执行

##### 2.render():

渲染页面 ，在ComponentWillMount()初始化数据后执行

##### 3.ComponentDidMount():

组件被挂载到页面后自动执行

#### **Updation**(更新): 

父组件经历4个步骤，子组件经历5个步骤，更新步骤得到所有函数都需要挂载过(初始化过)一遍后后才会执行

##### 1.ComponentWillReceiveProps():

子组件接收父组件传递的Props,只要父组件的render()函数被重新执行了，子组件的生命周期就会被执行，需要经过一次初始化后才会执行

##### 2.ShouldComponentUpdate():

组件更新前执行，询问是否更新组件，返回布尔值，false不执行后面步骤

##### 3.ComponentWillUpdate():

组件更新前执行，依据ShouldComponentUpdate()的返回值决定是否执行

##### 4.Render():

渲染虚拟DOM

##### 5.CompoenntDidUpdate():

组件更新完成之后执行

#### **Unmounting**(剔除): 

ComponentWillUnmount():当组件即将从页面清除时执行,存在于子组件中的dom被删除时执行

#### **shouldComponentUpdate**(是否更新组件)：

返回bool值，用于优化子组件更新次数

### 过渡动画

步骤：

1.声明一个状态
2.将状态绑定到一个按钮或者其他能触发事件的dom上
3.在按钮上的className绑定样式，可以判断状态来绑定不同的样式
4.写过渡样式：
4.1(学了一些简单的样式)：
	opacity(不透明度)：0-1，
	transition(过渡函数)： <property> <duration> <timing-function> <delay>

### redux

将所有组件中的状态(state)放在一个公共区域(store)，某一个组件修改了状态后其他组件就能感知到，解决了react复杂传值的问题

redux理解：
#### **React Components**:

React中的组件，状态改变的发起者

#### **Action Creators**:
组件发起状态改变的请求后，Store通过dispatch将请求(包含PreviousState与action)转发给Reducer
#### **Store**:

全局数据管理中心

createStore(reducer)，创建store的函数传入一个reducer表示管理中心有个记录仪

getState():获取Store的数据

subscribe()该函数可以将订阅store中state的改变，有改变时subscribe接受的回调函数就会执行

dispatch():将组件需要改变状态的请求(action)转发/派发给Reducer

#### **Reducers**:

将改变后的state进行深拷贝后进项与组件需要的逻辑后返回新的状态,最后在组件中使用store.getState()函数接收

#### ActionTypes:

没有引入ActionTypes时在组件中直接写字符串，如果出现拼写错误会很难排查，控制台不会出现任何错误异样。  引入ActionTypes之后如果出现拼写错误会直接编译异常

#### Redux流程：

组件有改变store中的state需求时

1.创建一个action

2.通过store的dispatch将action派发给reducer的时候action会自动执行

3.reducer虽然能接受到状态与action但是不能直接修改state所以可以进行深拷贝然后进行组件所需的逻辑操作后 返回新的state

4.store接收到reducer返回的新state后更新state数据

5.组件中通过store的subscribe()，可以在该函数中通过store的getState()获取store中的state，然后更新数据

注意：只有store能改变state，reducer只是返回新state，改变的事还是有store做

同时，reducer必须是一个纯函数，纯函数是指，给固定的输入，就一定有固定的输出，而且不会有任何副作用。不纯的函数举例：在函数中做日期赋值或者异步操作等，将state值变成一些不可预测的值等操作。副作用指：修改store中的state会带来一些意向不到的因素

### 无状态组件

当一个类组件只有render()函数时 就可以使用无状态组件替换类组件

无状态组件的定义方式  使用一个能接受props，返回jsx的箭头函数

#### 优点

类组件需要执行生命周期函数与render()函数，无状态组件省略了这些执行步骤

### Redux-thunk 中间件

https://github.com/reduxjs/redux-thunk

```react
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

/** 构建扩展器 */
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

// 通过构建扩展器调用 申请中间件函数，传入中间件(在actionCreator中可以返回函数)
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

// 创建store时加入扩展器
const store = createStore(reducer, enhancer);

export default store;
```



#### 作用：

1.使用redux-thunk中间件实现ajax数据请求，在不使用thunk中间件时actionCreator中只能返回一个对象，使用后可以返回一个函数，这个函数接收dispatch参数，用来发送函数中的action到reducer(走reducer的流程)

2.在actionCreator中管理项目中的业务逻辑