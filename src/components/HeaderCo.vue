<template>
    <header class="eme-header eme-nav-light">
        <nav class="eme-nav">
            <div class="nav-logo m-plus-rounded-1c-bold">
                <p>DILAN MARCANO</p>
            </div>
            <div class="eme-vertical m-plus-rounded-1c-bold">
                <p @click="$emit('changeMode')" class="eme-nav-theme">DAY</p>
                <p @click="$emit('showOptions')">OPT</p>
            </div>
        </nav>
    </header>
</template>
