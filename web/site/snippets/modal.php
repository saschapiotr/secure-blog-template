<?php 
  global $modalOpen;

  $request = $kirby->request();
  
  if($request->method() == 'POST' && array_key_first($request->body()->contents()) == 'openModal'):
    $modalOpen = true;
  elseif($request->method() == 'POST' && array_key_first($request->body()->contents()) == 'closeModal'):
    $modalOpen  = false;
  else:
    $modalOpen  = false;
  endif;
?>

<span class="modal <?php e($modalOpen, '', 'hidden') ?>">
  <h1>Modal Open</h1>
</span>