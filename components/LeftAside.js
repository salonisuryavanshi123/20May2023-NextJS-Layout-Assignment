import React from 'react'

export default function LeftAside() {
  return (
    <aside>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
            </li>
            </ul>

    </aside>
  )
}
