<?php snippet('header/header') ?>

<?php 
  global $modalOpen;
  snippet('modal/modal') 
?>

<form method="post">
  <input id="toggleModal"
    type="submit" 
    name="<?php e($modalOpen , 'closeModal', 'openModal') ?>" 
    value="<?php e($modalOpen , 'close modal', 'open modal') ?>" />
</form>

<h1><?= $page->title() ?></h1>

<?php snippet('footer/footer') ?>