import panflute as pf


def action(elem, doc):
  global _inside_eqn

  if hasattr(elem, "classes") and "footnotes" in elem.classes:
    elem.classes.append("pt-8 text-sm")

  # Add padding to the footnotes horizontal rule.
  if isinstance(elem, pf.HorizontalRule):
    return pf.Div(*[elem], classes=["pb-8"])

  # The list should have numbers.
  if isinstance(elem, pf.OrderedList):
    pass

  # Add some custom classes to the footnote list items.
  if isinstance(elem, pf.ListItem):
    div = elem.content[0]

    if isinstance(div, pf.Div):
      if "fn" in div.identifier:
        div.classes.append("pl-2")


def main(doc=None):
  return pf.run_filter(action, doc=doc)


if __name__ == '__main__':
  main()