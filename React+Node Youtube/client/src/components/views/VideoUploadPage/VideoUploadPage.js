import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

const { Title } = Typography

const PrivateOptions = [
    { value: 0, label: "Private" },
    { value: 1, label: "Public" },
]
const CategoryOptions = [
    { value: 0, label: "Flim & Animation" },
    { value: 1, label: "Autos & Vehicles" },
    { value: 2, label: "Music" },
    { value: 3, label: "Pets & Animals" },
]

function VideoUploadPage(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [selectPrivate, setSelectPrivate] = useState(0)
    const [category, setCategory] = useState(0)

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const onChangePrivate = (event) => {
        setSelectPrivate(event.target.value)
    }

    const onChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    const onDrop = (files) => {
        console.log(files)

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0]);

        Axios.post('/api/video/upload', formData, config)
            .then(response => {
                if (response.data.success) {
                    console.log(response)

                    let variable = {
                        url: response.data.url,
                        fileName: response.data.fileName
                    }

                    Axios.post('/api/video/thumbnail', variable)
                        .then(response => {
                            if (response.data.success) {
                                console.log(response)

                            } else {
                                alert("썸네일 생성에 실패 했습니다.");
                            }
                        })

                } else {
                    alert("비디오 업로드를 실패했습니다.")
                }
            })
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Drop zone */}
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={100000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }} {...getRootProps()}>
                                <input {...getInputProps()}></input>
                                <Icon type="plus" style={{ fontSize: '3rem' }}></Icon>
                            </div>
                        )}

                    </Dropzone>

                    {/* Thumbnail */}
                    <div>
                        <img src alt />
                    </div>

                </div>

                <br />
                <br />
                <Input onChange={onChangeTitle} value={title}></Input>
                <br />
                <br />
                <TextArea onChange={onChangeDescription} value={description}></TextArea>
                <br />
                <br />

                <select onChange={onChangePrivate}>
                    {PrivateOptions.map((m, i) => (
                        <option key={i} value={m.value}>{m.label}</option>
                    ))}
                </select>
                <br />
                <br />
                <select onChange={onChangeCategory}>
                    {CategoryOptions.map((m, i) => (
                        <option key={i} value={m.value}>{m.label}</option>
                    ))}
                </select>
                <br />
                <br />

                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div >
    )
}

export default VideoUploadPage;
