import{ref, watch} from 'vue'

export function useImageUpload() {
    let imageFile = ref("")
    let imageUrl = ref("")

    function handleImageSelected(event) {
        // console.log(event)
        if (event.target.files.length === 0) {
            imageUrl.value = ""
            imageFile.value = ""

            return;
        }

        imageFile.value = event.target.files[0];
    }

    watch(imageFile, (imageFile) => {
        if (!(imageFile instanceof File)) {
            return;
        }

        let fileReader = new FileReader()

        fileReader.readAsDataURL(imageFile)

        fileReader.addEventListener("load", () => {
            imageUrl.value = fileReader.result
            // console.log(imageUrl.value)
        })
    })

    return {
        imageFile,
        imageUrl,
        handleImageSelected
    }
}