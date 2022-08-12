<?php snippet('header') ?>
<?php 
  global $modalOpen;
  snippet('modal') 
?>

<form method="post">
  <input 
    type="submit" 
    name="<?php e($modalOpen , 'closeModal', 'openModal') ?>" 
    value="<?php e($modalOpen , 'close modal', 'open modal') ?>" />
</form>

<h1><?= $page->title() ?></h1>
