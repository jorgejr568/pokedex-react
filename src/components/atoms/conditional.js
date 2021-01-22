import { bool, element } from 'prop-types'
const Conditional = ({ condition, renderIf, renderElse = null }) => {
  return condition ? renderIf : renderElse
}

Conditional.propTypes = {
  condition: bool.isRequired,
  renderIf: element.isRequired,
  renderElse: element,
}

export { Conditional }
