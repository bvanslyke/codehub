
import * as React from "react";

function File({filename, content}) {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">{filename}</div>
            <div className="panel-body">
                <pre>{content}</pre>
            </div>
        </div>
    );
}

export function Gist(props) {
    const filesObj = props.files;
    const files = Object.values(filesObj);
    return (
        <div>
            <h2>Viewing Gist</h2>
            {files.map((file, index) => (
                <File {...file} key={index} />
            ))}
        </div>
    );
}