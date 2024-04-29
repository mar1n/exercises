const Input = ({namefn, name }) => <input classname="name" type="txt" value={name} onChange={(e) => namefn(e.target.value)} />

export default Input