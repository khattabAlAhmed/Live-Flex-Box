const board = document.querySelector("#board")
        const addItem = document.querySelector("#addItem")
        const removeItem = document.querySelector("#removeItem")
        const counter = document.querySelector("#counter")

        addItem.onclick = function () {
            newChild = document.createElement("div")
            newChild.classList.add("board-item")
            newChild.textContent = `item${board.children.length}`
            board.appendChild(newChild)
            counter.textContent = board.children.length - 1

        }
        removeItem.onclick = function () {
            if (board.children.length > 1) {
                board.lastElementChild.remove()
                counter.textContent = +counter.textContent - 1

            }
        }



        const optionItem = document.querySelectorAll('[data-option-item]');
        optionItem.forEach(el => {
            el.addEventListener('mouseover', () => {
                hoverTitle = el.parentElement.parentElement.dataset.option + " : " + el.dataset.optionItem;
                if (el.classList.contains("active"))
                    el.title = (`remove ${hoverTitle}`)
                else
                    el.title = (`add ${hoverTitle}`)

            });


            el.addEventListener('click', () => {
                let chldrn = el.parentElement.children
                let parent = el.parentElement
                let grand = el.parentElement.parentElement

                if (!el.className.includes("active")) {
                    grand.classList.add("active-option")
                    if (board.style.cssText.includes(`${grand.dataset.option}`))
                        board.style.cssText += `${grand.dataset.option}:none`
                    board.style.cssText += `${grand.dataset.option}:${el.dataset.optionItem}`
                    board.style.cssText += `${grand.dataset.option}:${el.dataset.optionItem}`
                    parent.previousElementSibling.lastChild.textContent = el.dataset.optionItem;
                    // console.log(`${grand.dataset.option}:${el.dataset.optionItem}`)
                }

                for (let i = 0; i < chldrn.length; i++) {
                    if (chldrn[i] == el)
                        continue;
                    if (chldrn[i].classList.contains("active"))
                        chldrn[i].classList.remove("active")
                }
                el.classList.toggle("active")

                if (!el.className.includes("active")) {
                    grand.classList.remove("active-option")
                    board.style.cssText = `${grand.dataset.option}:none`
                    parent.previousElementSibling.lastChild.textContent = "normal";
                    // console.log(`${grand.dataset.option}:none`)
                }
                console.log(board.style.cssText)

            });
        })

        document.addEventListener("dblclick", function (el) {
            if (el.target.classList.contains("board-item")) {
                document.body.style.backgroundColor = "#333"
            }

        })


