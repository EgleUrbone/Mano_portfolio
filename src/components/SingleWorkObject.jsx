import { useState } from 'react';
import css from './SingleWorkObject.module.css';

export default function SingleWorkObject(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div onClick={() => setExpanded(!expanded)} className={css.singleWork}>
      <h2 className={css.title}>{props.title}</h2>
      <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
      <p className={css.text}>{expanded ? `${props.text}` : ''}</p>
      <p>{expanded ? '' : 'Read more...'}</p>
    </div>
  );
}
