import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import Preview from "./components/Preview";
import SideBar from "./components/SideBar";
import ToggleButton from "./components/reusable/ToggleButton";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/reusable/Header";
import Footer from "./components/reusable/Footer";
import { initialPost } from "./components/constants";
import { getDataFromLS, setDataInLS } from "./components/utils";

function App() {
  const [lsPostData, setLsPostData] = useState(() => getDataFromLS());
  const [newPost, setNewPost] = useState(initialPost);
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [isVisibleDropdown, setIsVisibleDropdownDropdown] = useState(false);

  useEffect(() => {
    // Update local storage whenever lsPostData changes
    setDataInLS(lsPostData);
  }, [lsPostData]);

  const handleInput = (e, name) => {
    const { value, type, checked } = e.target;

    if (type === "checkbox") {
      setNewPost((prev) => ({
        ...prev,
        [name]: { ...prev[name], isChecked: checked },
      }));
    } else {
      setNewPost((prev) => ({
        ...prev,
        [name]: { ...prev[name], [name]: value },
      }));
    }
  };

  const handleSave = () => {
    if (!!editId) {
      const updatedPosts = lsPostData.map((post) =>
        post.id === editId ? newPost : post
      );
      setLsPostData(updatedPosts);

      setEditId(null);
    } else {
      const postArr = [...lsPostData, { ...newPost, id: uuidv4() }];
      setLsPostData(postArr);
      setDataInLS(postArr);
    }
    setNewPost(initialPost);
    setActiveTab(null);
  };

  const handleTab = (postId, activeTabIndex) => {
    setActiveTab(activeTabIndex);
    setEditId(postId);
    const filterPost = lsPostData.find((post) => post.id === postId);

    setNewPost(filterPost);
    setIsVisibleDropdownDropdown(false);
  };

  const handleAddJob = () => {
    setEditId(null);
    setNewPost(initialPost);
  };

  const handleDeletePost = () => {
    const isDelete = window.confirm("Are you sure want to delete?");
    if (isDelete) {
      const filterPosts = lsPostData.filter((post) => post.id !== editId);
      setLsPostData(filterPosts);
    }
    setIsVisibleDropdownDropdown(false);
    setEditId(null);
    setNewPost(initialPost);
  };

  const handleDuplicatePost = () => {
    const isDuplicate = window.confirm(
      "Are you sure want to duplicate this post?"
    );
    if (isDuplicate) {
      const editPost = { ...newPost, id: uuidv4() };
      const updatedPosts = [...lsPostData, editPost];
      setLsPostData(updatedPosts);
    }
    setEditId(null);
    setIsVisibleDropdownDropdown(false);
    setNewPost(initialPost);
  };

  return (
    <main>
      <Header />
      <div className="flex flex-col w-full lg:flex-row mt-2 p-8">
        <SideBar
          activeTab={activeTab}
          posts={lsPostData}
          handleTab={handleTab}
          handleAddJob={handleAddJob}
        />
        <Form
          newPost={newPost}
          handleInput={handleInput}
          handleSave={handleSave}
        >
          {!!editId && (
            <div
              onChange={() => setIsVisibleDropdownDropdown(!isVisibleDropdown)}
              className="flex"
            >
              <p className="text-xl mr-4">Active ?</p>
              <ToggleButton />
            </div>
          )}
        </Form>
        {isVisibleDropdown && (
          <DropdownMenu
            handleDeletePost={handleDeletePost}
            handleDuplicatePost={handleDuplicatePost}
          />
        )}
        <Preview newPost={newPost} stroke="white" />
      </div>
      <Footer />
    </main>
  );
}

export default App;
