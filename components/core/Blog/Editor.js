import {useEffect} from 'react'
import {useQuill} from 'react-quilljs' //https://www.npmjs.com/package/react-quilljs
import 'quill/dist/quill.snow.css'

const modules = {
   toolbar: {
      container: [
         [
            {header: 1},
            {header: 2},
            {font: []}
         ],
         [{size: []}],
         ['bold', 'italic', 'underline', 'strike', 'blockquote', {'color': []}, {background: []}],
         [
            {list: 'ordered'},
            {list: 'bullet'},
            {indent: '-1'},
            {indent: '+1'},
         ],
         ['link', 'image', 'video', 'code-block'],
         ['clean']
      ]
   },
   clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
   },
}

const Editor = ({setContent = () => ''}) => {
   const {quill, quillRef} = useQuill({modules, placeholder: 'Blog content...'});

   useEffect(() => {
      if (quill)
         quill.on('text-change', () => setContent(quill.root.innerHTML));
   }, [quill])

   return <div className='h-[400px] border-[1px] border-[rgba(0,0,0,0.1)] rounded overflow-hidden bg-white text-black'>
      <div className='h-[90%] w-full'>
         <div ref={quillRef}/>
      </div>
   </div>


}


export default Editor;