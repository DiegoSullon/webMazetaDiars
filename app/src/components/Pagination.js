import React from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
function Pagination() {
    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}

export default Pagination
