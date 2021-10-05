import React from 'react'

function Alert() {
    return (
        <div>
            <div class="alert alert-primary" role="alert">
                {PaymentResponse.message}
            </div>
        </div>
    )
}

export default Alert
