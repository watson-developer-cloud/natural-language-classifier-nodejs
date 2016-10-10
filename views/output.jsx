import React from 'react';
import { Icon, Tabs, Pane, Code } from 'watson-react-components';

export default function (prop) {
  return (
    <div className="output-container">
      {(prop.data || prop.error) ? <h2 className="base--h2">Output</h2> : null}
      {prop.data ?
        (
          <Tabs selected={0}>
            <Pane label="Results">
              <p>
                Natural Language Classifier is&nbsp;
                <code className="base--code">
                  {Math.floor(prop.data.classes[0].confidence * 100)}%
                </code>
                &nbsp;confident that the question submitted is talking about&nbsp;
                <code className="base--code">{prop.data.top_class}</code>.
              </p>
            </Pane>
            <Pane label="JSON">
              <Code language="json">
                {JSON.stringify(prop.data, null, 2)}
              </Code>
            </Pane>
          </Tabs>
        ) : null
      }
      {prop.error ?
        (
          <div className="service-error">
            <Icon type="error" />
            <p className="base--p service-error--message">{prop.error}</p>
          </div>
        ) : (null)
      }
    </div>
  );
}
