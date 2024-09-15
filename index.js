const Button = props => {
  const {className, btnRex} = props
  return <button className={`${className}`}>{btnRex}</button>
  //  Write your code here.
}

const element = (
  <div>
    <h1>Social Media</h1>
    <Button btnRex='Like' />
    <Button btnRex='Comment' />
    <Button btnRex='Share' />
  </div>
  //  Write your code here.
)

ReactDOM.render(element, document.getElementById('root'))
