import React from 'react';
import './Twitter.css';

export default function Twitter() {
  return (
    <div className="Twitter">
      <a className="twitter-timeline" href="https://twitter.com/tflaccess">
        A Twitter List by TwitterDev
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
    </div>
  );
}
