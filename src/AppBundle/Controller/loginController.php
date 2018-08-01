<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\Response;


class loginController extends Controller
{

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request, AuthenticationUtils $authenticationUtils)
    {

        $errors = $authenticationUtils->getLastAuthenticationError();
        $lastusername = $authenticationUtils->getLastUsername();
        $req = $request->request->all();
        //$req = json_decode($req["username"], true);

        $returnData = array("errors" => $errors->getMessageKey(), "lastusername" => $lastusername);
        return new Response(json_encode($returnData, true), 200);
//        return $this->render('default/index.html.twig', array(
//            'errors' => $errors,
//            'lastusername' => $lastusername
//        ));
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction() {

    }

}