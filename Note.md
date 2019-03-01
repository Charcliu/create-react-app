### 创建组件

- 通过 JS 函数 创建（无状态组件）
- 通过 class 创建（有状态组件）

#### JavaScript 函数创建

- 函数名称必须为大写字母开头，React 通过这个特点来判断是不是一个组件
- 函数必须有返回值，返回值可以是：JSX 对象或 null
- 返回的 JSX，必须有一个根元素
- 组件的返回值使用()包裹，避免换行问题

```
    function Welcome(props) {
    return (
        // 此处注释的写法
        <div className="shopping-list">
        {/* 此处 注释的写法 必须要{}包裹 */}
        <h1>Shopping List for {props.name}</h1>
        <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
        </ul>
        </div>
    )
    }

    ReactDOM.render(
    <Welcome name="jack" />,
    document.getElementById('app')
    )
```

#### class 创建

```
//  react对象继承字React.Component
class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }
  // class创建的组件中 必须有rander方法 且显示return一个react对象或者null
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    )
  }
}
```

### props

- 作用：给组件传递数据，一般用在父子组件之间
- 说明：React 把传递给组件的属性转化为一个对象并交给 props
- 特点：props 是只读的，无法给 props 添加或修改属性
- props.children：获取组件的内容，比如：

```
    <Hello>组件内容</Hello> 中的 组件内容
```

### state

- 用来给组件提供组件内部使用的数据
- 只有通过 class 创建的组件才具有状态
- 状态是私有的，完全由组件来控制
- 不要在 state 中添加 render() 方法中不需要的数据，会影响渲染性能！
- 可以将组件内部使用但是不渲染在视图中的内容，直接添加给 this
- 不要在 render() 方法中调用 setState() 方法来修改 state 的值,但是可以通过 this.state.name = 'rose' 方式设置 state（不推荐!!!!）

```
// 例：
class Hello extends React.Component {
  constructor() {
    // es6继承必须用super调用父类的constructor
    super()

    this.state = {
      gender: 'male'
    }
  }

  render() {
    return (
      <div>性别：{ this.state.gender }</div>
    )
  }
}
```

### setState

- 使用 setState() 方法修改状态，状态改变后，React 会重新渲染组件
- 不要直接修改 state 属性的值，这样不会重新渲染组件！！！

```
// 错误姿势！！！
this.state.test = '这样方式，不会重新渲染组件';

constructor(props) {
  super(props)

  // 正确姿势！！！
  // -------------- 初始化 state --------------
  this.state = {
    count: props.initCount
  }
}

componentWillMount() {
  // -------------- 修改 state 的值 --------------
  // 方式一：
  this.setState({
    count: this.state.count + 1
  })

  this.setState({
    count: this.state.count + 1
  }, function(){
    // 由于 setState() 是异步操作，所以，如果想立即获取修改后的state
    // 需要在回调函数中获取
    // https://doc.react-china.org/docs/react-component.html#setstate
  });

  // 方式二：
  this.setState(function(prevState, props) {
    return {
      counter: prevState.counter + props.increment
    }
  })

  // 或者 - 注意： => 后面需要带有小括号，因为返回的是一个对象
  this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
  }))
}
```

### Style 样式

```
// 1. 直接写行内样式：
<li style={{border:'1px solid red', fontSize:'12px'}}></li>

// 2. 抽离为对象形式
var styleH3 = {color:'blue'}
var styleObj = {
  liStyle:{border:'1px solid red', fontSize:'12px'},
  h3Style:{color:'green'}
}

<li style={styleObj.liStyle}>
  <h3 style={styleObj.h3Style}>评论内容：{props.content}</h3>
</li>

// 3. 使用样式表定义样式：
import '../css/comment.css'
<p className="pUser">评论人：{props.user}</p>
```

### 生命周期

> 创建阶段（Mounting）、运行和交互阶段（Updating）、卸载阶段（Unmounting）

- Mounting
  > 该阶段只执行一次
- - constructor()
- - - 获取 props
- - - 初始化 state
- - componentWillMount()
- - - 组件被挂载到页面之前调用，其在 render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染
- - - 无法获取页面中的 DOM 对象
- - - 可以调用 setState() 方法来改变状态值
- - - 发送 ajax 请求获取数据
- - render()
- - - 渲染组件到页面中，无法获取页面中的 DOM 对象
- - - 不要在 render 方法中调用 setState() 方法，否则会递归渲染
- - - 这个函数能够执行多次，只要组件的属性或状态改变了，这个方法就会重新执行
- - componentDidMount()
- - - 组件已经挂载到页面中
- - - 可以进行 DOM 操作，比如：获取到组件内部的 DOM 对象
- - - 可以发送请求获取数据
- - - 可以通过 setState() 修改状态的值，在这里修改状态会重新渲染

- Updating
  > 该阶段的函数执行多次,每当组件的 props 或者 state 改变的时候，都会触发运行阶段的函数
- - componentWillReceiveProps()
- - - 组件接受到新的 props 前触发这个方法
- - - 参数：当前组件 props 值
- - - 可以通过 this.props 获取到上一次的值
- - - 若你需要响应属性的改变，可以通过对比 this.props 和 nextProps 并在该方法中使用 this.setState()处理状态改变
- - - 修改 state 不会触发该方法
- - shouldComponentUpdate()
- - - 根据这个方法的返回值决定是否重新渲染组件，返回 true 重新渲染，否则不渲染
- - - 通过某个条件渲染组件，降低组件渲染频率，提升组件性能
- - - 如果返回值为 false，那么，后续 render()方法不会被调用
- - - 这个方法必须返回布尔值！！！
- - componentWillUpdate()
- - - 组件将要更新
- - - 参数：最新的属性和状态对象
- - - 不能修改状态 否则会循环渲染
- - componentDidUpdate()
- - - 组件已经被更新
- - - 参数：旧的属性和状态对象

- Unmounting
  > 组件销毁阶段：组件卸载期间，函数比较单一，只有一个函数，这个函数也有一个显著的特点：组件一辈子只能执行依次！
- - componentWillUnmount()
- - - 只要组件不再被渲染到页面中，那么这个方法就会被调用
- - - 在卸载组件的时候，执行清理工作，比如清除定时器,清除 componentDidMount 创建的 DOM 对象

### 绑定事件

- 通过 React 事件机制 onClick 绑定
- JS 原生方式绑定（通过 ref 获取元素）

### React 单向数据流

- 数据流动方向：自上而下，也就是只能由父组件传递到子组件
- 数据都是由父组件提供的，子组件想要使用数据，都是从父组件中获取的
- 如果多个组件都要使用某个数据，最好将这部分共享的状态提升至他们最近的父组件当中进行管理

### 受控组件

> 受控组件中，表单数据由 React 组件处理

### 非受控组件

> 表单数据由 DOM 处理

### React渲染

> 通过差分算法，找到需要更新的DOM对象，更新UI渲染新树

### Context

> Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。

- Provider
- - React 组件允许 Consumers 订阅 context 的改变。
- - 接收一个 value 属性传递给 Provider 的后代 Consumers。
- - 一个 Provider 可以联系到多个 Consumers。Providers 可以被嵌套以覆盖组件树内更深层次的值。

- Consumer
- - 一个可以订阅 context 变化的 React 组件。
- - 接收一个函数作为子节点. 函数接收当前 context 的值并返回一个 React 节点。
- - 传递给函数的 value 将等于组件树中上层 context 的最近的 Provider 的 value 属性。