
import * as React from "react";

import { GITHUB_USER } from "config";
import Link from "redux-first-router-link";
import { ACTION_TYPE as profileAction } from "pages/ProfilePage";

function CommitRow({sha, commit}) {
    const { message, author } = commit;
    const authorName = author.name;
    return (
        <tr>
            <td>{authorName}</td>
            <td>{message.split("\n")[0]}</td>
            <td>{sha}</td>
        </tr>
    );
}

export function Repo(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h2> <Link to={{ type: profileAction }}>{GITHUB_USER}</Link> / {props.name} </h2>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">Commits since last month</div>
                <div className="panel-body">
                    <table className="table table-striped table-responsive">
                        <thead>
                            <th>Author</th>
                            <th>Message</th>
                            <th>SHA</th>
                        </thead>
                        <tbody>
                            {props.commits.map((commit, index) => (
                                <CommitRow {...commit} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    );
}