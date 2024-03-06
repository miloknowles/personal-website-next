import panflute as pf

_inside_eqn = False


def action(elem, doc):
  global _inside_eqn

  if isinstance(elem, pf.Para):
    # Detect open and close $$, indicating a LaTeX equation.
    if isinstance(elem.content[0], pf.Str) and "$$" in elem.content[0].text:
      _inside_eqn = True if not _inside_eqn else False
      if _inside_eqn:
        pf.debug("\n>>>> START EQUATION ($$) >>>>")
      else:
        pf.debug("<<<< END EQUATION ($$) <<<<\n")
      return []

    # Render the LaTeX equation as a MathJax.Node.
    if _inside_eqn:
      pf.debug("($$) " + str(elem.content))
      formula = "{\""
      for item in elem.content:
        if isinstance(item, pf.Str):
          # Need to escape backslashes for MathJax to work.
          formula += item.text.replace("\\", "\\\\")
        elif isinstance(item, pf.Space):
          formula += " "
      formula += "\"}"
      elem.content = [pf.RawInline(
        f'<MathJax.Node formula={formula}/>'
      )]


def main(doc=None):
  return pf.run_filter(action, doc=doc)


if __name__ == '__main__':
  main()