import panflute as pf


def action(elem, doc):
  global _inside_eqn

  if isinstance(elem, pf.Header):
    if elem.level == 1:
      elem.classes.append("rt-Heading rt-r-size-9 rt-r-weight-bold")
    elif elem.level == 2:
      elem.classes.append("rt-Heading rt-r-size-8 rt-r-weight-bold")
    elif elem.level == 3:
      elem.classes.append("rt-Heading rt-r-size-7 rt-r-weight-bold")
    elif elem.level == 4:
      elem.classes.append("rt-Heading rt-r-size-6 rt-r-weight-bold")

  # if isinstance(elem, pf.Link):
  #   # Adding the `rt-Link` class will make the link use the highlight color.
  #   elem.content.insert(0, pf.RawInline('{" "}', format='html'))
  #   elem.content.append(pf.RawInline('{" "}', format='html'))
  #   elem.classes.append("rt-Text rt-reset rt-underline-auto")

  # if isinstance(elem, pf.Emph):
  #   elem.content.insert(0, pf.RawInline('{" "}', format='html'))
  #   elem.content.append(pf.RawInline('{" "}', format='html'))


def main(doc=None):
  return pf.run_filter(action, doc=doc)


if __name__ == '__main__':
  main()