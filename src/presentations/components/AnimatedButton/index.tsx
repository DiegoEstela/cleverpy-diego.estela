import { ButtonAni } from "./index.style"

function AnimatedButton({text} : {text: string}) {
  return (
    <ButtonAni>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
      {text}
    </ButtonAni>
  )
}

export default AnimatedButton