const SideBar = ({ activeTab, posts, handleTab, handleAddJob }) => {
    return <aside className="w-1/5">
        <button onClick={handleAddJob} className="px-4 py-2 bg-white border-2 border-gray-500 w-full">New Job +</button>
        <ul>
            {posts.length > 0 ? (
                posts.map((post, i) => <li key={i} onClick={() => handleTab(post.id, i)} className={`${activeTab === i ? 'bg-sky-400' : 'bg-gray-300'}  p-2 border-b-2 border-slate-500 cursor-pointer`}>{`${post.title.title} (Post ${i + 1})`}</li>)
            ) : null}

        </ul>
    </aside>
}

export default SideBar;