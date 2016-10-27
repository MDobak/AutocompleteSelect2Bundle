<?php

namespace Mdobak\AutocompleteSelect2Bundle\Form\Type;

use Mdobak\AutocompleteWidgetBundle\Form\Type\AutocompleteCoreFormType;
use Symfony\Component\Form\AbstractType;

/**
 * Class AutocompleteSelect2FormType.
 */
class AutocompleteSelect2FormType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return AutocompleteCoreFormType::class;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'mdobak_autocomplete_select2_form';
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'mdobak_autocomplete_select2_form';
    }
}
