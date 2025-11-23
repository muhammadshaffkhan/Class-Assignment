import React from 'react'
import post from './data.json'
import Menubar from './Menubar'

const Avatar = ({ name }) => {
  const initials = name ? name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() : '??'
  return (
    <div style={{
      width:56, height:56, borderRadius:'50%', background:'#6c757d', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700, fontSize:18
    }}>{initials}</div>
  )
}

const Comment = () => {
  return (
    <>
      <Menubar />
      <div className="container py-5">
        <h2 className="mb-4">Comments</h2>
        <div className="row g-3">
          {post && post.length ? post.map(item => (
            <div className="col-md-6" key={item.id}>
              <div className="card shadow-sm">
                <div className="card-body d-flex">
                  <div className="me-3">
                    <Avatar name={item.name} />
                  </div>
                  <div>
                    <h5 className="card-title mb-1">{item.name}</h5>
                    <div className="mb-2 text-muted small">{item.email} • Post {item.postId}</div>
                    <p className="card-text" style={{whiteSpace:'pre-wrap'}}>{item.body}</p>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-12">
              <div className="alert alert-info">No comments found.</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Comment