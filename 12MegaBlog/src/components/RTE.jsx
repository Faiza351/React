import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='newdiv'>
            {label && <label>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue='default value'
                        init={
                            {
                                initialValue:defaultValue,
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists"
                                ],
                                toolbar:"undo redo | blocks | image | bold italic"

                            }

                        }
                        onEditorChange={onChange}
                        />
    )}
            />
        </div>
    )
}

