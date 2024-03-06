import panflute as pf


BACKTICK_START = "`["
BACKTICK_END = "]`"


def action(elem, doc):
  if isinstance(elem, pf.Para):
    # Format items between backticks as code.
    for i, item in enumerate(elem.content):
      if isinstance(item, pf.Str):
        if BACKTICK_START in item.text and BACKTICK_END not in item.text:
          elem.content[i] = pf.RawInline(
            '{" "}' + f'<code class="text-indigo-200 font-bold">{item.text.replace(BACKTICK_START, "")}' + '{" "}',
            format='html'
          )
        elif BACKTICK_END in item.text and BACKTICK_START not in item.text:
          elem.content[i] = pf.RawInline(
            f'{item.text.replace(BACKTICK_END, "")}</code>' + '{" "}',
            format='html'
          )
        elif BACKTICK_START in item.text and BACKTICK_END in item.text:
          elem.content[i] = pf.RawInline(
            '{" "}' + f'<code class="text-indigo-200 font-bold">{item.text.replace(BACKTICK_START, "").replace(BACKTICK_END, "")}</code>' + '{" "}',
            format='html'
          )


def main(doc=None):
  return pf.run_filter(action, doc=doc)


if __name__ == '__main__':
  main()